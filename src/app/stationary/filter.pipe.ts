import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPipe'  
})
export class FilterPipe implements PipeTransform {
  transform(stationery: any[], term: String, selected_locations:any[]): any[] {
    var tempStationery = [];
    
    if(!stationery) return [];

    if((!term) && (selected_locations.length<1)) return stationery;

    //case 1: filter by text only
    else if(selected_locations.length<1){
      console.log("filtering using text only");
      term = term.toLowerCase();
          
              return stationery.filter( it => {
                return it.name.toLowerCase().includes(term) ;
              });

              
    }else{    
      //case 2: filter by selected_certificates only:
      
      console.log("selected locations: ");

      //loop through the input selected_certificates array and concatenate schools having this certficate
      for (var i = 0; i < selected_locations.length; i++) { 
        console.log(selected_locations[i].name);   //prints selected cerificates correctly
        tempStationery =tempStationery.concat(stationery.filter(it=>{return it.location.city.includes(selected_locations[i].name)}));
    
    }
      console.log("Stationery: "+tempStationery.length);

      //case 3: filter by term and certifcates
      if(term){
        console.log("filtering using text:"+term+" and locations: "+ selected_locations);
        
        tempStationery=tempStationery.filter( it => {
                return it.name.toLowerCase().includes(term) ;
              });
      }
      return tempStationery;
    } 
   
   } 
}
