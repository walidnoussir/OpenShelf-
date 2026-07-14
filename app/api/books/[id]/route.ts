import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { bookSchema } from "@/lib/validators";
import { deleteBook, getBookById, updateBook } from "@/services/book.service";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const book = await getBookById(id);

    if (!book) {
      return NextResponse.json(
        {
          success: false,
          message: "Livre introuvable.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: book,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("GET /api/books/:id", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur serveur.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const body = await request.json();

    const validatedData = bookSchema.parse(body);

    const updatedBook = await updateBook(id, validatedData);

    if (!updatedBook) {
      return NextResponse.json(
        {
          success: false,
          message: "Livre introuvable.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Livre mis à jour avec succès.",
        data: updatedBook,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("PUT /api/books/:id", error);

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
        message: "Erreur serveur.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;

    const deletedBook = await deleteBook(id);

    if (!deletedBook) {
      return NextResponse.json(
        {
          success: false,
          message: "Livre introuvable.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Livre supprimé avec succès.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("DELETE /api/books/:id", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur serveur.",
      },
      {
        status: 500,
      },
    );
  }
}
