import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

interface iGithubUser {
    id: number;
    node_id: string;
    login: string;
    name: string;
    avatar_url: string;
    email: string;
    twitter_username: null;
    html_url: string;
    bio: null;
    repos_url: string;
    public_repos: number;
    created_at: string;

}

export default function Users(props: { data: string; }) {

    const [users, setGithubUser] = useState<iGithubUser[]>([]);

    useEffect(() => {

        const fetchGithubUser = async () => {
            const {data} = await axios.get(
                'https://localhost:5001/v1/users/'+props.data
            );

            setGithubUser(data);
        }
        
        fetchGithubUser();

    },[props.data]);

    return (
        <div>
        { users.map(user => 
        <Card sx={{ maxWidth: 400 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={user.avatar_url}></Avatar>
            }
            title={user.name}
            subheader={user.login}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            Data de Criação: {new Date(user.created_at).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Biográfia: {user.bio}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton arial-label="mailicon" disabled={user.email == null} href={"mailto:"+user.email}>
                <MailIcon />
            </IconButton>
            <IconButton arial-label="twittericon" disabled={user.twitter_username == null} href={"https://twitter.com/"+user.twitter_username} target="_blank">
                <TwitterIcon />
            </IconButton>
            <IconButton arial-label="githubicon" href={user.html_url} target="_blank">
                <GitHubIcon  />
            </IconButton>
        </CardActions>
        </Card>
        )}
        </div>
    );
}