export type clickRenderProps = {
    onClick :()=> void,
    clicked : boolean

}

export type plans ={
    id:string;
    title: string;
  description: string;
  originalPrice?: string;
  discount?: string;
  price?: string;
  features?: string[];
  buttonText: string;
  renewalNote?: string;
  message: string;
  }

export type PricingPlan = {
  pricingPlans:plans[]
};

export type reviewType = {
  name:string;
  review:string;
  project:string
}

export type Section  = {
  subject: string;
  features: string[];
}
export type blogType = {
  title:string;
  description:string;
  author?:string;
  _id?:string;
  slug?:string;
  updatedAt?:string

  sections?: Section[];
}

export type User = {
  email:string,
  token:string
}