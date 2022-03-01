export interface Response<T> {
  msg: string;
  data: T;
  code: number;
}

export interface ResponseData {
  container_operation_source: any;
  food_spu_tags: Array<any>;
  poi_info: PosInfo;
}
export interface PosInfo {
  delivery_time_tip: string;
  discounts2: { icon_url: string; info: string }[];
  head_pic_url: string;
  min_price_tip: string;
  name: string;
  pic_url: string;
  poi_back_pic_url: string;
  shipping_fee_tip: string;
  shipping_time: string;
  wm_poi_score: number;
}
