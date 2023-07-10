import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  const product = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      price: body.price,
      brandId: body.brandId,
    },
  });
  return NextResponse.json(product, { status: 200 });
};

export const DELETE = async (req, { params }) => {
  const product = await prisma.product.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(product, { status: 200 });
};
