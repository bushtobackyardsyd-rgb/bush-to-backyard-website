import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  project: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, suburb, project }: QuoteRequest = await req.json();

    const emailContent = {
      from: "noreply@bushtobackyard.com.au",
      to: "info@bushtobackyard.com.au",
      subject: "Free Quote Request - Bush to Backyard",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>From:</strong> ${name}</p>
        <hr>
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Suburb:</strong> ${suburb}</li>
        </ul>
        <h3>Project Description:</h3>
        <p>${project}</p>
      `,
      text: `
New quote request from ${name}\n\nContact Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSuburb: ${suburb}\n\nProject Description:\n${project}
      `
    };

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Email service not configured. Please contact us directly at info@bushtobackyard.com.au or call 0481 446 789" 
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailContent),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Failed to send email. Please contact us directly at info@bushtobackyard.com.au or call 0481 446 789" 
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Quote request sent successfully!" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "An error occurred. Please contact us directly at info@bushtobackyard.com.au or call 0481 446 789" 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});