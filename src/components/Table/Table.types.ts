export type PropTypes = {
  records: TableItem[];
};

export type TableItem = {
  name: string;
  type: DeviceType;
  available: boolean;
};

export type DeviceType = 'Oficina' | 'Personal' | 'Trabajo';
