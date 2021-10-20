import React , {Component} from "react";
import "./Content.css";
import InputTextBox from "./InputTextBox/InputTextBox";
import DropDownBox from "./DropDownBox/DropDownBox";
import CheckBox from "./CheckBox/CheckBox";
import RadioBox from "./RadioBox/RadioBox";
import Button from "./Button/Button";
import MyInput from "./MyInput/MyInput";
import Footer from "./Footer/Footer";

import dropIcon from '../../../Icons/drop1.png';

class Content extends Component{
  constructor(props) {
    super(props);

    this.state={
       flag:false,
    }

  }
  searchDisplay=()=>{
    this.setState({flag: !this.state.flag })
  }
  render(){

  
  const myForm =[
    {name:"isEdu1" , type:"select" , label:"CMSنوع  " , options:["نوع CMS", "فوق" ,"لیسانس"]},
    {name:"isEdu2" , type:"select" , label:"نوع صفحه CMS" , options:["نوع صفحه CMS", "فوق" ,"لیسانس"]},
    {name:"isEdu3" , type:"select" , label:"نوع خدمات" , options:["نوع خدمات", "فوق" ,"لیسانس"]},
    {name:"isEdu4" , type:"select" , label:"بخش" , options:["بخش", "فوق" ,"لیسانس"]},
    {name:"ip1" , type:"text" , label:"بخش به زبان انگلیسی"},
    {name:"ip2" , type:"text" , label:"بخش به زبان فارسی "},
    {name:"ip3" , type:"text" , label:"برای صفحه انگلیسی تصویر خود را بکشید و رها کنید یا آدرس بدهید "},
    {name:"ip4" , type:"text" , label:" برای صفحه فارسی تصویر خود را بکشید و رها کنید یا آدرس بدهید"},
    {name:"ip5" , type:"text" , label:"عنوان به زبان انگلیسی"},
    {name:"ip6" , type:"text" , label:"عنوان به زبان فارسی "},
    {name:"ip7" , type:"text" , label:"توصیف به زبان انگلیسی "},
    {name:"ip8" , type:"text" , label:"توصیف به زبان فارسی "},
    {name:"ip9" , type:"text" , label:" اعلان به زبان انگلیسی "},
    {name:"ip10" , type:"text" , label:"اعلان به زبان فارسی "},
    {name:"ip11" , type:"text" , label:" طول"},
    {name:"ip12" , type:"text" , label:" عرض"},
    {name:"ip13" , type:"text" , label:" تاریخ شروع"},
    {name:"ip14" , type:"text" , label:"تاریخ پایان "},
    {name:"ip15" , type:"text" , label:" توصیف عنوان به زبان انگلیسی "},
    {name:"ip16" , type:"text" , label:" توصیف عنوان به زبان فارسی"},
    {name:"ip17" , type:"text" , label:"قیمت به ریال ایران" , cssClass:"InputSmall"},
    {name:"ip18" , type:"text" , label:"قیمت به دلار امریکا" , cssClass:"InputSmall"},
    {name:"ip19" , type:"text" , label:"تخفیف " },
    {name:"ich1" , type:"checkbox" , label:"فعال"},
  ];
  const myFormJSX=myForm.map((itm , i)=>{
    return(
      <div className={"formLine "+(itm.cssClass? itm.cssClass:'')}>
        <MyInput 
          type={itm.type}  
          label={itm.label} 
          options={itm.options ? itm.options: ''}
          ></MyInput>
      </div>
    )
  });
 // ////////////////////////////////search///////////////////////////////////////////
const SearchForm=[
  {name:"inp-search" , type:"text" , label:" جستجو بر اساس عنوان,اعلان توصیف فارسی/عنوان اعلان توصیف انگلیسی"},
  {name:"i-ra-ser-inac" , type:"radio" , myLabels:["غیر فعال" ,"فعال"] },
  {name:"i-s-cms" , type:"select" , label:" CMS نوع" , options:[" نوع CMS", "فوق" ,"لیسانس"]},
  {name:"i-s-serv" , type:"select" , label:"نوع خدمات" , options:["نوع خدمات", "فوق" ,"لیسانس"]},
]
const SearchFormJSX=SearchForm.map((itm , i)=>{
return(
  <div className="formLine">
    <MyInput type={itm.type} 
      label={itm.label ? itm.label: ''} 
      options={itm.options ? itm.options: ''}
      myLabels={itm.myLabels ? itm.myLabels: ''}>
    </MyInput>
  </div>
)

})
//___________________________________________________________________________ 

 
  
  return (
    <div className="ContentContainer">
      <div className="form">
        
        <div className="HeadContainer">
          <div className="title">CMS مدیریت</div>
          <div className="help">راهنما  </div>
        </div>

        {myFormJSX}

        <div className="ButtonContainer">
          <Button className="ButtonStyle Dark" value="بازنشانی"></Button>
          <Button
            className="ButtonStyle Light"
            value="فرم را تکمیل کنید"
          ></Button>
        </div>


        <div className="SearchArea">
          <div className="clickSearch "  >
           <label className="font-style " onClick ={this.searchDisplay}>جستجو</label>
           <image src={dropIcon} />
            <div className={  this.state.flag ? "hidden" :""} > 
              {SearchFormJSX}
                <div className="searchButtonContainer">
                  <Button 
                    className="searchButtonStyle Dark" 
                    value="بازنشانی">
                  </Button>
                  <Button
                    className="searchButtonStyle submit"
                    value="جستجو">
                  </Button>
                </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  </div>
);
}}

export default Content;
