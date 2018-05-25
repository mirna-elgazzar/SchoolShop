export class School {
  schoolId: number;
  name: string;
  website?: string;
  email?: string;
  vision?: string;
  mission?: string;
  address?: string;
  logo?:string;
  phoneNumbers?: string[];
  tags?: string[];
  systems?: string[];
  grades?: string[];
  fascilities?: string[];
  certificates?: string[];
  location?:{"address":string,"city":string,"coordinates":number[]};
  totalRatings?:number;
  photos?:string[];
  
  IGCSE?: boolean;
  IB?:boolean;
  BAC?: boolean;
  AMERICAN?: boolean;
  ABITUR?: boolean;


}
