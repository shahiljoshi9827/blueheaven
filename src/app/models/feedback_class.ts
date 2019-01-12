export class feedbackclass{
  constructor(
    public feedback_id?:number,
    public feedback?:string,
    public feedback_date?:Date,
    public fk_product_id?:number,
    public fk_email_id?:string

  ){}
};
