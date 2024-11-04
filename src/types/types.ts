export interface Hearing {
  id: string;
  date: string;
  time: string;
  court: string;
  section: string;
  judge: string;
  caseNumber: string;
  hearingType: 'FIRST_CALL' | 'POSTPONEMENT' | 'FINAL';
  subject: string;
  notes?: string;
}

export interface Party {
  id: string;
  type: 'PLAINTIFF' | 'DEFENDANT';
  firstName: string;
  lastName: string;
  fiscalCode: string;
  address: string;
  email: string;
  phone: string;
  present: boolean;
  notes?: string;
}

export interface Lawyer {
  id: string;
  firstName: string;
  lastName: string;
  barAssociation: string;
  registrationNumber: string;
  email: string;
  phone: string;
}

export interface Document {
  id: string;
  title: string;
  type: string;
  uploadDate: string;
  url: string;
}