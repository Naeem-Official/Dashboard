const PortfolioData = require("../Model/portfoliodata");


const EnterData= async(req,res)=>{
    const { name, email, phoneNo, skills, projects } = req.body;


    try {
        const newPortfolio = await PortfolioData.create({
            name,
            email,
            phoneNo,
            skills,
            projects,
        });
        return res.status(201).json(newPortfolio);
    } catch (error) {
        console.error('Error creating portfolio data:', error);
        return res.status(500).json({ message: 'Error creating portfolio data', error: error.message });
    }

}

const ShowData = async(req,res) => {
    try {
        const reponse = await PortfolioData.findAll();
        res.status(200).json({
            message:"data fetch successfully",
            data:reponse
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching portfolio data", error: error.message });
    }
   
}
module.exports = {EnterData,ShowData}