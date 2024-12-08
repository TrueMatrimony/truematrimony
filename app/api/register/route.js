import connectMongo from "@/utils/connectMongo";
import RegisterModel from "@/models/registerModel";

export async function POST(req) {
  try {
    const {
      name,
      dob,
      age,
      gender,
      mobilenum,
      whatsappmobilenum,
      email,
      profession,
      monthlyIncome,
      address,
      towncity,
      district,
      state,
      nationality,
      pincode,
      height,
      weight,
      color,
      religion,
      community,
      subcaste,
      raasi,
      star,
      marriagecategory,
      password,
      cpassword,
    } = await req.json();
    const enquiry = {
      name,
      dob,
      age,
      gender,
      mobilenum,
      whatsappmobilenum,
      email,
      profession,
      monthlyIncome,
      address,
      towncity,
      district,
      state,
      nationality,
      pincode,
      height,
      weight,
      color,
      religion,
      community,
      subcaste,
      raasi,
      star,
      marriagecategory,
      password,
      cpassword,
    };
    await connectMongo();
    await RegisterModel.create(enquiry);
    return new Response(
      JSON.stringify({ message: "Registration Successful!!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return Response.json({ message: error._message });
  }
}
