"use server";

import { z } from "zod";
import requireUser from "./validation/require-user";
import { companySchema } from "./validation/zodSchemas";
import { prisma } from "./db";
import { redirect } from "next/navigation";

export async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();

    const validateData = companySchema.parse(data);

    await prisma.user.update({
        where: {
            id: session.id
        },
        data: {
            onboardingCompleted: true,
            userType: 'COMPANY',
            Company: {
                create: {
                    ...validateData
                }
            }
        }
    })
    redirect('/')
}