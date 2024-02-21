import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent
} from "@mui/material";

const sectionStyle = {
    margin: '5rem 0'
}

const headingStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    my: 4
}

const Team = () => {
    return (
        <section style={sectionStyle}>
            <Typography variant='h2' sx={headingStyle}>Our Team</Typography>
            <Grid container spacing={8} columns={20} sx={{ 
                p: 5,
                display:'flex',
                justifyContent:'center'
                 }}>
                {
                    [1, 2, 3, 4].map((member, index) =>
                        <Grid item xs={4} key={index}>
                            <Card sx={{ maxWidth: 450 }} key={index}>
                                <CardMedia
                                    sx={{ height: 180 }}
                                    image='/team.jpg'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                        Nikhil Goyal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="personCourse">
                                        Founder
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </section>
    );
}

export default Team;