import Button from "../../../components/Button";
import ImageDrop from "../../../components/imageDrop/ImageDrop";
import Input from "../../../components/Input";
import './PiczenRightSide.css';

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
          <div className="image-drop-box imagedrop-div"><ImageDrop /></div>
          <div className="image-drop-box"><ImageDrop /></div>
          <div className="image-drop-box"><ImageDrop /></div>
          <div className="image-drop-box"><ImageDrop /></div>
          <div className="image-drop-box"><ImageDrop /></div>
        </div>
      </div>

    </div>
  );
};

export default PiczenRightSide;
