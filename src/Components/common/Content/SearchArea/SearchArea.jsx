import react, {useState}from "react";


const SearchArea=()=>{
// {title, items , multiSelect= false}
    // const [open, setOpen] = useState(false);
    // const [selection, setSelection] = useState([]);

    // function handleOnClick(item){}


    return(
     <div className="SearchAreaContainer">


         
{/* 
<div class="search">
                <div class="click-search" dir="rtl">
                  جستجو
                  <div class="hidden-search">
                    <Input
                      value="جستجو با نام فارسی/نام انگلیسی و یاتا کد"
                      type="text"
                      class="form_input"
                    />
                    <Input
                      value="نوع"
                      type="text"
                      class="form_input search-input-type"
                    />
                    <br />
                    <Radio class="search-radio" label="فعال" />
                    <Radio class="search-radio" label="غیرفعال" />
                    <br />
                    <div class="search-btn">
                      <Button value="بازنشانی" />
                      <Button value="جستجو" />
                    </div>
                  </div>
                </div>
              </div> */}

         {/* <div
            tabIndex={0}
            className="SearchHeader"
            role="button"
            onKeyPress={()=> toggle (!open)}
            onClick={()=> toggle (!open)}
         >
             <div className="SearchHeader-title">
                 <p classname="SearchHeader-title-bold">{title}</p>
             </div>
             
             <div  classname="SearchHeader-action">
                 <p>{open ?'close' : 'open'}</p>
              </div>   
         </div> */}
     </div>
    );
}
export default SearchArea;









