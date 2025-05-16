import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

function Card({ hideMedia }) {
    if (hideMedia) {
        return (
            <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                    <Typography>Card 01</Typography>
                </CardContent>
            </MuiCard>
        );
    }

    return (
        <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)', overflow: 'unset' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279180270_3134768223504603_6401090039492819929_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=QmCSZ0P2Gn9jQtH8SRLPMg&oh=00_AfJSi4xrQ-IKlewkUPB4D4siWTU7WOARJjxv9MgDlzYxyw&oe=682C81DF"
                title="green iguana"
            />
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Tạ Tuấn Thành MERN</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px' }}>
                <Button size="small" startIcon={<GroupIcon />}>
                    20
                </Button>

                <Button size="small" startIcon={<CommentIcon />}>
                    15
                </Button>

                <Button size="small" startIcon={<AttachmentIcon />}>
                    10
                </Button>
            </CardActions>
        </MuiCard>
    );
}

export default Card;
