import Tarjeta from './Components/Tarjeta';
import Tarjeta2 from './Components/Tarjeta2';
import './Styles/styles.css';

function Page1() {
  const TarjetaPropieda = {
    imageCard: "https://crrhospitality.com/wp-content/uploads/2024/01/environmental-impact-in-campsite-planning-1024x585.jpg",
    dateCard: "12/03/2022",
    titleCard: "Camping in nature is way of promoting the model business",
    detailCard: "When you choose to bring a new idea to life, you emotionally become...",
    authorImageCard: "https://s3-media0.fl.yelpcdn.com/bphoto/srsFQ8omqOvGOzAg11avqw/348s.jpg",
    author: "Janelle Freeman",
    job: "Expert Blogger",
    state: "Complete"
  };

  const TarjetaPropieda2= {
    imageCard:"https://cdn.orsted.com/-/media/www/images/corp/job-ads/job-images/finance-and-controlling/picture_d_finance_and_controlling.jpg",
        dateCard:"13/03/2022",
        TitleCard:"This computer belongs to the company, so it's ours",
        detailCard:"Just the right time for everyone to wake up and feel the strength...",
        authorImageCard:"https://s3-media0.fl.yelpcdn.com/bphoto/srsFQ8omqOvGOzAg11avqw/348s.jpg",
        author:"Janelle Freeman",
        job:"Expert Blogger",
        state:"Work"
  };

  const TarjetaPropieda3 = {
        imageCard:"https://media.licdn.com/dms/image/v2/D4D12AQEjBLFvTXaSdA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734166461008?e=2147483647&v=beta&t=c3JU6vFBb4Kf8iAYKJBCSbGKj5vl7SuPUi1ndWUWcCw",
        dateCard:"14/03/2022",
        TitleCard:"I work in sales for a large telecommunications company",
        detailCard:"Delivering strategies that help increase customer satisfaction...",
        authorImageCard:"https://s3-media0.fl.yelpcdn.com/bphoto/srsFQ8omqOvGOzAg11avqw/348s.jpg",
        author:"Janelle Freeman",
        job:"Expert Blogger",
        state:"Complete"
    };

    const TarjetaPropieda4 = {
      imageCard:"https://www.revechat.com/wp-content/uploads/2020/04/Omnichannel-support-how-to-increase-customer-satisfaction-1-jpg.webp",
        dateCard:"15/03/2022",
        TitleCard:"I work in sales for a large telecommunications company",
        detailCard:"Delivering strategies that help increase customer satisfaction...",
        authorImageCard:"https://s3-media0.fl.yelpcdn.com/bphoto/srsFQ8omqOvGOzAg11avqw/348s.jpg",
        author:"Janelle Freeman",
        job:"Expert Blogger",
        state:"Complete"
    };

    const TarjetaPropieda5 = {
      imageCard:"https://www.revechat.com/wp-content/uploads/2020/04/Omnichannel-support-how-to-increase-customer-satisfaction-1-jpg.webp",
        dateCard:"15/03/2022",
        TitleCard:"5 ways to stay productive during remote work",
        detailCard:"Discover routines and tools that will boost your daily output...",
        authorImageCard:"https://s3-media0.fl.yelpcdn.com/bphoto/srsFQ8omqOvGOzAg11avqw/348s.jpg",
        author:"Janelle Freeman",
        job:"Expert Blogger",
        state:"Complete"
    };
  
  return (
    <>
    <header>
        <h1>Work Blog</h1>
        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital & web development services.</p>
    </header>
    
    <main className="blog-container"> 

        <Tarjeta2 TarjetaProp = {TarjetaPropieda}/>
        <Tarjeta2 TarjetaProp = {TarjetaPropieda2}/>
        <Tarjeta2 TarjetaProp = {TarjetaPropieda3}/>
        <Tarjeta2 TarjetaProp = {TarjetaPropieda4}/>
        <Tarjeta2 TarjetaProp = {TarjetaPropieda5}/>      

        {/* Tarjeta 6 */}
        <Tarjeta 
        imageCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNejFx4SzN0Ov92KjpjsBDQ71H_xX1_Oxgw&s"
        dateCard="17/03/2022"
        TitleCard="Team collaboration tips for modern developers"
        detailCard="Learn how teams can better communicate and ship faster together..."
        authorImageCard="https://s3-media0.fl.yelpcdn.com/bphoto/srsFQ8omqOvGOzAg11avqw/348s.jpg"
        author="Janelle Freeman"
        job="Expert Blogger"
        state="Pendent"/>
    </main>
    </>
  );
}

export default Page1;