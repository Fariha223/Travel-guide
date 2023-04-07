import hotel from "..hotel.js";

export const createHotel = async(req, res, next) => {

    const newHotel =new hotel(req.body);
    try{
        const savedHotel =await newHotel.save()
    } catch(err){
        next(err);
    }
};

export const updateHotel = async(req, res, next) => {
    try{
        const updateHotel = hotel.findOneAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updateHotel);
    } catch(err) {
        next(err);
    }
};

export const getHotel = async(req, res, next) => {
    try{
        const hotel = hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch(err){
        next(err);
    }
};

export const getHotels = async (req, res, next) => {
    const {min, max} = req.query;
    try {
      const hotels = await hotel.find({
        lowestPrice: {$gt: min | 2000, $lt: max || 50000},
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };

  export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };