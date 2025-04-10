export interface IMedicine {
    id: string; // Unique identifier
    name: string;
    description: string;
    price: number; // in currency, e.g., USD
    stock: number; // available units
    requiresPrescription: boolean;
    manufacturer: {
      name: string;
      address?: string; // optional
      contact?: string; // optional
    };
    expiryDate: string; // ISO format (e.g., '2025-12-31')
  }
  