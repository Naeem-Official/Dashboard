const projectsmodel = require("../Model/project")

const addprojects = async(req,res)=>{
    const { title, description, imageUrl,startedat,endedat} = req.body;
    try {
        const newproject = await projectsmodel.create({
            title, description, imageUrl,startedat,endedat
        })
        res.status(200).json(newproject)
    } catch (error) {
        console.error('Error adding project:', error);
    res.status(500).json({ message: 'Error adding project', error: error.message });
    }
}

const GetAllProjects = async (req,res)=>{
   try {
    const projects = await projectsmodel.findAll();
    res.status(200).json(projects);
    console.error("backend projects: ",projects)
   } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
   }
}

const timeline = async (req,res) => {
    try {
        const projects = await projectsmodel.findAll();
        res.json(projects);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching timeline', error });
      }
}

module.exports = {
    addprojects,
    GetAllProjects,
    timeline
  };