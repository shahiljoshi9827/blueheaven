export class orderclass{
  constructor(
    public order_id?:number,
    public order_amount?:number,
    public order_qty?:string,
    public order_status?:string,
    public fk_product_id?:number,
    public fk_email_id?:string

  ){}
};
