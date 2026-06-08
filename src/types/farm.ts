export type Farm = {
  id: number;
  farmName: string;
  location: string;
  farmSizeHectares: number;
  ownerId: number;
};

export type FarmFormData = {
  name: string;
  location: string;
  farmSizeHectares: number;
  ownerId: number;
};
