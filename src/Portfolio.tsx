import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { title: "Project 1", description: "A cool project using React.", image: "https://via.placeholder.com/300" },
  { title: "Project 2", description: "An awesome Node.js API.", image: "https://via.placeholder.com/300" },
  { title: "Project 3", description: "A sleek UI with Material UI.", image: "https://via.placeholder.com/300" }
];

const Portfolio: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>My Portfolio</Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h3" gutterBottom>
          Hi, I'm Raghava 👋
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Frontend Developer | React Enthusiast | UI/UX Designer
        </Typography>
      </Container>

      {/* Projects Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
        <Button startIcon={<GitHub />} href="https://github.com/yourusername" target="_blank">
          GitHub
        </Button>
        <Button startIcon={<LinkedIn />} href="https://linkedin.com/in/yourusername" target="_blank">
          LinkedIn
        </Button>
        <Button startIcon={<Email />} href="mailto:your.email@example.com">
          Email
        </Button>
      </Container>
    </div>
  );
};

export default Portfolio;
