import React from "react";
import "./Project.scss";
import { Card, CardCover, CardContent, Typography } from "@mui/joy";
import CodeIcon from "@mui/icons-material/Code";
import CategoryIcon from "@mui/icons-material/Category";
import { ProjectData, ProjectLink } from "../../utils/data";
import { motion } from "framer-motion";
import CreateIcon from "@mui/icons-material/Create";
import AppContainer from "../../container/AppContainer";
import MotionContainer from "../../container/MotionContainer";

const Project = () => {
  const [filterProjects, setFilterProjects] = React.useState([]);
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });
  const renderStateChanged = true;

  React.useEffect(() => {
    setFilterProjects(ProjectData);
  }, [renderStateChanged]);

  const openLinkInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const handleSectionChange = (projectLink: string) => {
    setActiveFilter(projectLink);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (projectLink === "All") {
        setFilterProjects(ProjectData);
      } else {
        setFilterProjects(
          ProjectData.filter((project) => project.tags.includes(projectLink))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Projects</h2>
      <h2 className="head-text">
        <span style={{ color: "#008080" }}>Latest Works</span>
      </h2>
      <div className="app__work-filter">
        {ProjectLink.map((projectLink, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === projectLink ? "item-active" : ""
            }`}
            onClick={() => handleSectionChange(projectLink)}
          >
            {projectLink}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterProjects.map((project, index) => (
          <Card
            sx={{ minHeight: "280px", minWidth: 320 }}
            className="app__work-item app__flex"
            key={index}
          >
            <CardCover className="app__work-img app__flex">
              <img src={project.image} alt={project.title} />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                {project.title}
              </Typography>
              <Typography
                startDecorator={<CreateIcon />}
                textColor="neutral.300"
              >
                {project.techStack}
              </Typography>
              <Typography
                startDecorator={<CategoryIcon />}
                textColor="neutral.300"
              >
                {project.category}
              </Typography>
              <div onClick={() => openLinkInNewTab(project.link)}>
                <Typography
                  startDecorator={<CodeIcon />}
                  textColor="neutral.300"
                >
                  {project.source}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </>
  );
};

export default AppContainer(
  MotionContainer(Project, "app__works"),
  "project",
  "app__whitebg"
);
