/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/12xYo57U9NL
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function CompromisoReactivacionColombia() {
  return (
    <div className="w-full py-4 md:py-4 lg:py-4">
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <div className="space-y-1">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Compromiso Reactivación colombia 2
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Línea de crédito directo con tasa compensada que busca apoyar a las Entidades Territoriales con recursos para aliviar la presión originada en la reducción de los ingresos causada por el Covid – 19 e impulsar la reactivación de la actividad económica en los territorios.  Vigencia de la Línea. Hasta agotar los recursos.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="mt-10 text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl">
              Condiciones
            </h3>
            <h4 className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <strong>TASA: </strong></h4>
            <ul className="space-y-4"><li className="list-disc">Municipios de categoría 3, 4, 5 y 6, Departamentos 3 y 4 y Distritos de categoría 3, 4, 5 y 6:
            IBR + 1,10% M.V. (Mensual Vencido) o IBR + 1,25% T.V. (Trimestral Vencido) o IBR + 1,45% S.V. (Semestral Vencido)</li>
            <li className="list-disc">Para distritos especiales 1 y 2, Departamentos Especiales y de categoría 1 y 2 y Municipios Especiales y de categoría 1 y 2:
            IBR + 1,60% M.V. (Mensual Vencido) o IBR + 1,75% T.V. (Trimestral Vencido) o IBR + 1,95% S.V. (Semestral Vencido)</li>
            </ul>
          </div>


                    <div className="mt-20">
                        <h4 className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <strong>Vigencia de la Línea: </strong></h4>
            <p>Hasta agotar los recursos.</p>
          </div>
          <div className="mt-20">
                        <h4 className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <strong>Plazo total: </strong></h4>
            <p>Hasta diez (10) años con hasta 3 años de periodo de gracia a capital.</p>
          </div>
          <div className="mt-20">
                        <h4 className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <strong>Beneficiarios: </strong></h4>
            <p>Entidades Territoriales.</p>
          </div>
          <div className="mt-20">
                        <h4 className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <strong>Uso de los recursos: </strong></h4>
            <p>Financiación de proyectos y/o gastos de inversión.</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Solicitar Crédito</h2>
            <p className="text-muted-foreground">
            Uno de nuestros Gerentes de Cuenta se pondrá en contacto con usted.
            Solicitudes únicamente para personas jurídicas.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="text" placeholder="Nombre" className="w-full" />
              <Input type="text" placeholder="Apellido" className="w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input type="email" placeholder="Email" className="w-full" />
            <Input id="phone" type="tel" placeholder="Celular" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="text" placeholder="Municipio" className="w-full" />
              <Input type="text" placeholder="Departamento" className="w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="text" placeholder="Entidad" className="w-full" />
              <Input type="text" placeholder="Cargo" className="w-full" />
            </div>
            <Textarea placeholder="Para que necesita los recursos,  sector, costo estimado de la inversion." className="w-full" rows={4} />
            <Button type="submit" className="w-full">
              Iniciar Proceso
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
