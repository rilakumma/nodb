
let id =0;
let favorites = [];

module.exports = {
    getFav: (req, res) => {
        res.send(favorites)
    },
    createFav: (req, res) =>{
        const { title, image } = req.body;
        id++;
        favorites.push({title, id, image});
        res.json(favorites);
    }
    // updateFav: (req, res) => {
    //     const {title, id} = req.body;
    //  
    //    
    // },
    // deleteFav: (req,res) => {
    //     
    // }

}


