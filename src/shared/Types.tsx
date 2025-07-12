export type clickRenderProps = {
    onClick :()=> void,
    clicked : boolean

}
export type advertisement ={
    advertisement:{
    title: string;
    desc: string;
    urgency: string;
    catch: string;
    notice: string;
    sendRequest: () => Promise<void>;
    }[]
    
}

export type PricingPlan = {
  pricingPlans:{
    title: string;
  description: string;
  originalPrice?: string;
  discount?: string;
  price?: string;
  features?: string[];
  buttonText: string;
  renewalNote?: string;
  message: string;
  }[]
};