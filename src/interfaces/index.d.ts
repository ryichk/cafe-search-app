export interface Photo {
  pc: {
    l: string;
    m: string;
    s: string;
  };
  mobile: {
    l: string;
    s: string;
  };
}

export interface CafeInfo {
  id: number;
  name: string;
  name_kana: string;
  address: string;
  station_name: string;
  large_service_area: {
    name: string;
  };
  service_area: {
    name: string;
  };
  large_area: {
    name: string;
  };
  middle_area: {
    name: string;
  };
  small_area: {
    name: string;
  };
  lat: float;
  lng: float;
  genre: {
    name: string;
    catch: string;
  };
  sub_genre: {
    name: string;
  };
  budget: {
    name: string;
    average: string;
  };
  budget_memo: string;
  catch: string;
  capacity: number;
  access: string;
  mobile_access: string;
  urls: {
    pc: string;
  };
  photo: Photo;
  open: string;
  close: string;
  wifi: string;
  private_room: string;
  card: string;
  non_smoking: string;
  parking: string;
  english: string;
  pet: string;
  child: string;
  lunch: string;
}

export interface HotpepperResponse {
  results: {
    results_available: number;
    results_returned: number;
    results_start: number;
    shop: Array<CafeInfo>;
  };
}

export interface SelectData {
  name: string;
  code: string;
}

export interface Input {
  label: string;
  name: string;
}

export interface SelectProps extends Input {
  data: Array<SelectData>;
}

export interface InputProps extends Input {
  placeholder: string;
}