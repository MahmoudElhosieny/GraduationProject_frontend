// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Leftimg from "./componants/Leftimg";
import Rightimg from './componants/Rightimg';
function App() {
  return (
    <>
      <div className='container-fluid  bg-light'>
        <div className='col-sm-11 m-auto  row'>
        <h2 className=' mt-3 py-3 hgi '> Shop our sets</h2>
          <div className='col-md-4   p-2 d-flex align-items-md-center justify-content-center  '> <Leftimg src={"https://d13r0hznkpv24o.cloudfront.net/media/amasty/webp/wysiwyg/luna-1_jpg.webp"} alt={"Bedroom"} title={"Bedroom"} class={"rounded-4 col-12 shadow imghover rotatimg  " } name={"Beding room"}/></div>
          <div className='col-md-8  p-md-3 py-2  d-flex flex-wrap justify-content-md-evenly justify-content-between'>
            <Rightimg src={"https://d13r0hznkpv24o.cloudfront.net/media/amasty/webp/wysiwyg/Living_jpg.webp"} alt={"Living room"} title={"Living room"} class={"rounded-4 col-12  imghover rotatimg"} name={"Living room"} divclass={"  col-md-5 col-6  p-2 p-sm-3 p-md-0 rounded-4  "} />
            <Rightimg src={"https://d13r0hznkpv24o.cloudfront.net/media/amasty/webp/wysiwyg/Dining_jpg.webp"} alt={"Dining room"} title={"Dining room"} class={"rounded-4 col-12  imghover rotatimg"} name={"Dining room"} divclass={"  col-md-5 col-6  p-2 p-sm-3 p-md-0   offset-md-1 rounded-4  "} />
            <Rightimg src={"https://d13r0hznkpv24o.cloudfront.net/media/amasty/webp/wysiwyg/Outdoor_1__jpg.webp"} alt={"Garden furniture"} title={"Garden furniture"} class={"rounded-4 col-12  imghover rotatimg"} name={"Garden furniture"} divclass={"  col-md-5 col-6  p-2 p-sm-3 p-md-0 rounded-4 "} />
            <Rightimg src={"https://d13r0hznkpv24o.cloudfront.net/media/amasty/webp/wysiwyg/Kitchen_jpg.webp"} alt={"Kitchens"} title={"Kitchens"} class={"rounded-4 col-12  imghover rotatimg" } name={"Kitchens"} divclass={"  col-md-5 col-6  p-2 p-sm-3 p-md-0 offset-md-1 rounded-4 "}/>
        </div>
        </div>
        </div>
   
    </>
  );
}

export default App;
