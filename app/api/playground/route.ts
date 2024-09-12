import { NextResponse } from "next/server";
import axios from "axios";
import { FaceDetectionApiResponse } from "@/app/lib/types";

export async function POST(
  request: Request
): Promise<NextResponse<FaceDetectionApiResponse>> {
  const formData = await request.formData();

  const options = {
    method: "POST",
    url:
      process.env.RAPIDAPI_URL + "v1/results?detection=true&embeddings=false",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.raPIDAPI_HOST,
    },
    data: formData,
  };

  const response = await axios.request(options);

  return NextResponse.json(response.data);
}
