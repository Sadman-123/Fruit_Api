const app=require('express')();
const cors=require('cors');
app.use(cors());
app.get('/fruit_api',(req,res)=>{
    var fruit_list=[
{
            "item":"Watermelon",
            "code":"2600",
            "pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyOlZrsFw_v4a3lNeD6OmdMM7QvKZbSmFnX3zmYiXtXpfDF8zPtENnuc&s=10",
            "quantity":"2",
            "price":"250"
        },
        {
            "item":"Apple",
            "code":"2312",
            "pic":"https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
            "quantity":"3",
            "price":"90"
        },
        {
            "item":"Strawberry",
            "code":"2311",
            "pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRIkEgXQ6prN8duYfvZmQB11kyhAwe2S58A&s",
            "quantity":"4",
            "price":"100"
        },
        {
            "item":"Pineapple",
            "code":"1311",
            "pic":"https://images.immediate.co.uk/production/volatile/sites/30/2024/06/Pineapple-01-5562ee3.jpg",
            "quantity":"1",
            "price":"70"
        },
        {
            "item":"Mango",
            "code":"3311",
            "pic":"https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg",
            "quantity":"12",
            "price":"320"
        },
        {
            "item":"Lichi",
            "code":"7421",
            "pic":"https://media.istockphoto.com/id/1398986887/photo/lychee-fruit-on-sack-with-green-leaf-and-wooden-background-fresh-ripe-lychee-peeled-from.jpg?s=612x612&w=0&k=20&c=UellqXkObH-UcyJIvDwfC5LhmiYhKXk6bmC0T9wxiV4=",
            "quantity":"24",
            "price":"400"
        },
        {
            "item":"Jackfruit",
            "code":"5219",
            "pic":"https://assets.clevelandclinic.org/transform/83980869-7c2c-4978-9458-91168f785166/eatJackfruit-823672534-770x533-1_jpg",
            "quantity":"1",
            "price":"100"
        },
        {
            "item":"Guava",
            "code":"1291",
            "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/1200px-Guava_ID.jpg",
            "quantity":"24",
            "price":"420"
        },
        {
            "item":"Banana",
            "code":"2311",
            "pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiE9BZy3SyV4Xb83a3V-e8Ywq6z1bVZlGsA&s",
            "quantity":"12",
            "price":"120"
        },
    ];
    res.json(fruit_list)
});
app.listen(3000,()=>{
    console.log("Listening...");
})