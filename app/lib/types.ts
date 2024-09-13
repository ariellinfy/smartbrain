export type Session = {
  id: string;
  userId: string;
  expires: string;
  sessionToken: string;
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken: string;
  accessToken: string;
  expiresAt: number;
  idToken: string;
  scope: string;
  sessionState: string;
  tokenType: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified?: string;
  image: string;
  hash: string;
  entries: number;
  joined: Date;
};

export interface StateAuth {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}

export interface StatePrediction {
  error?: string;
  response?: FaceDetectionApiResponse;
}

export interface RankProps {
  name: string;
  entries: number;
}

export interface ImageFormProps {
  formAction: (payload: FormData) => void;
  isPending?: boolean;
}

export interface ResultProps extends StatePrediction {
  isPending?: boolean;
}

interface NamedPoints {
  "left-eye": [number, number];
  "right-eye": [number, number];
  "nose-tip": [number, number];
  "mouth-left-corner": [number, number];
  "mouth-right-corner": [number, number];
}

interface FaceClasses {
  face: number; // Confidence score for the detected face
}

interface FaceObject {
  box: [number, number, number, number]; // Bounding box coordinates [left, top, width, height]
  entities: [
    {
      kind: "classes"; // Detection category (face)
      name: "face";
      classes: FaceClasses;
    },
    {
      kind: "namedpoints"; // Facial landmarks
      name: "face-landmarks";
      namedpoints: NamedPoints;
    }
  ];
}

interface FaceEntity {
  kind: "objects"; // Entity kind, which is objects in this case
  name: "face-detector"; // Name of the detector used
  objects: FaceObject[]; // Array of detected face objects
}

interface DetectionResult {
  status: {
    code: string; // Status code (e.g., "ok")
    message: string; // Message (e.g., "Success")
  };
  name: string; // Image URL
  md5: string; // Image MD5 hash
  width: number; // Image width in pixels
  height: number; // Image height in pixels
  entities: FaceEntity[]; // Array of detected entities (faces)
}

export interface FaceDetectionApiResponse {
  results: DetectionResult[]; // Array of results (one result per image)
  userEntries: number;
}
