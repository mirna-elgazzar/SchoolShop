import { Pipe, PipeTransform } from '@angular/core';
import { School } from '../../../schools/school';

@Pipe({
  name: 'filterPipe' 
})
export class FilterPipe implements PipeTransform {
  transform(schools: any[], term: string,selected_certificates:any[]): any[] {
    var tempSchools = [];
    
    if(!schools) return [];

    if((!term) && (selected_certificates.length<1)) return schools;

    //case 1: filter by text only
    else if(selected_certificates.length<1){
      console.log("filtering using text only");
      term = term.toLowerCase();
          
              return schools.filter( it => {
                return it.name.toLowerCase().includes(term) ;
              });

               
    }else{    
      //case 2: filter by selected_certificates only:
      
      console.log("selected certificates: ");

      //loop through the input selected_certificates array and concatenate schools having this certficate
      for (var i = 0; i < selected_certificates.length; i++) { 
        console.log(selected_certificates[i].name);   //prints selected cerificates correctly
        tempSchools =tempSchools.concat(schools.filter(it=>{return it.certificates.includes(selected_certificates[i].name)}));
    
    }
      console.log("schools"+tempSchools.length);

      //case 3: filter by term and certifcates
      if(term){
        console.log("filtering using text:"+term+" and certificates: "+ selected_certificates);
        tempSchools = tempSchools.filter( it => {
                return it.name.toLowerCase().includes(term) ;
              });
      }
      console.log("schools"+tempSchools.length);
      return tempSchools;
    } 
   
   } 
}
