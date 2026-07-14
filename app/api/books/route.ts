import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { bookSchema } from "@/lib/validators";
import { createBook, getAllBooks } from "@/services/book.service";

export async function GET() {
  try {
    const books = await getAllBooks();

    return NextResponse.json(books, {
      status: 200,
    });
  } catch (error) {
    console.error("GET /api/books:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de la récupération des livres.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = bookSchema.parse(body);

    const newBook = await createBook(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Livre créé avec succès.",
        data: newBook,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("POST /api/books:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Erreur de validation.",
          errors: error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur serveur est survenue.",
      },
      {
        status: 500,
      },
    );
  }
}
