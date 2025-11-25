import Button from "../../../components/Button";
import ImageSelect from "../../../components/ImageSelect/ImageSelect";
import Input from "../../../components/Input";
import ResuableEditInfo from "../../../components/resuableEditInfoCard/ResuableEditInfo";
import ClassicsArrive from "./Classics/ClassicsArrive";
import NewInPiczen from "./newInPiczen/NewInPiczen";
import PhotoEditingClassics from "./photoEditClassics/PhotoEditingClassics";
import './PiczenRightSide.css';
import ResuableTrending from "./resuabletrending/ResuableTrending";

const PiczenRightSide = () => {
  return (
    <div className="piczenRightSide-main-div">

      <div className="piczen-header">
        <h2 className="piczen-title">Create</h2>
        <Input
          type="search"
          placeholder="Search a template"
          className="piczen-search"
        />
      </div>


      <div className="getStarted-main-div">

        <div className="getStarted-header">
          <p className="getStarted-title">Get started</p>
          <Button className="seeAll-btn">See all</Button>
        </div>

        <div className="imagesDrop-div">
          <div className="image-drop-box imagedrop-div"><ImageSelect /></div>
          <div className="image-drop-box"><ResuableEditInfo src="https://cdn.pixabay.com/photo/2016/11/25/09/47/sun-flower-1857997_1280.png" data="Remove Background" /></div>
          <div className="image-drop-box"><ResuableEditInfo data="AI Background" src="https://cdn.pixabay.com/photo/2024/08/02/10/40/picture-8939420_1280.jpg" /></div>
          <div className="image-drop-box"><ResuableEditInfo data="Batch mode" src="https://cdn.pixabay.com/photo/2017/03/14/13/50/urban-art-2143183_960_720.jpg" /></div>
          <div className="image-drop-box"><ResuableEditInfo data="Retouch" src="https://cdn.pixabay.com/photo/2023/11/13/17/25/women-8386031_960_720.jpg" /></div>
        </div>
      </div>

      <div>
        <NewInPiczen />
      </div>

      <div>
        <ClassicsArrive />
      </div>

      <div>
        <PhotoEditingClassics />
      </div>

      <div>
        <ResuableTrending apiUrl="trending" mapImage={(item) => item.image} />
      </div>

    </div>
  );
};

export default PiczenRightSide;
