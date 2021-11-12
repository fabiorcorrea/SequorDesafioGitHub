import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { red } from '@mui/material/colors';


interface iGithubRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    created_at: string;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export default function Repositories(props: { data: string; }) {

    const [repositories, setGithubRepo] = useState<iGithubRepo[]>([]);

    useEffect(() => {

        const fetchGithubRepo = async () => {
            const {data} = await axios.get(
                'https://localhost:5001/v1/repos/'+props.data
            );

            setGithubRepo(data);
        }
        
        fetchGithubRepo();

    },[props.data]);

    return (
        <div>
        { repositories.map(repo => 

            <Card sx={{ maxWidth: 500 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[100] }} aria-label="recipe">R</Avatar>
                }
                title={repo.name}
                subheader={repo.full_name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Data de Criação: {new Date(repo.created_at).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Descrição: {repo.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton arial-label="githubicon" href={repo.html_url} target="_blank">
                    <GitHubIcon  />
                </IconButton>
            </CardActions>
            </Card>
        )}
        </div>
    );
}
