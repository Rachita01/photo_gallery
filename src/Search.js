import React,{useState} from 'react';
import data from './data';
const Search = () => {
    const [text,setText] = useState('');
    const searchText = (event) => {
       setText(event.target.value);
    }


    let DataSearch = data.galleryData.filter(
        item => { 
            //return Object.keys(item).Searchid(key =>item[key].toString().toLowerCase().includes(text.toString().toLowerCase()));
            //console.log(Object.keys(item).slice(0,)
            //console.log()
            return (Object.keys(item).slice(0,Object.keys(item).length - 1).some(key =>item[key].toString().toLowerCase().includes(text.toString().toLowerCase())));
            
            
        }
        

    )
    console.log();
 return(
     <section className='py-4 container'>
         <div className='row justify-content-center'>
             <div className='col-12 mb-5'>
                 <div className='mb-3 col-4 mx-auto'>
                     <label className='form-label h4'>Search</label>
                     <input type="text" className='form-control' value={text} onChange={searchText}/>
                 </div>
             </div>
             {DataSearch.map((item)=> {
                 return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                     <img src={item.img} alt="dog" className='card-img-top'/>
                     <div className='card-body'>
                         <h5 className='card-title'>{item.title}</h5>
                         <p className='card-text'>{item.desc}</p>
                     </div>
                 </div>
             </div>
            
                 )
             })
                         
             }
            
         </div>

     </section>
 )
}

export default Search;