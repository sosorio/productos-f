/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/7tvetC30sDg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rethink_Sans } from 'next/font/google'
import { Taviraj } from 'next/font/google'

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

taviraj({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Redescuento() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-4 lg:py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿ Qué es Redescuento?</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Es la modalidad mediante la cual FINDETER entrega los recursos de crédito a los intermediarios financieros, para
que estos a su vez los entreguen a los beneficiarios por medio de crédito o leasing, con el propósito de promover
el desarrollo de las regiones y se impulsen proyectos de infraestructura que beneficien a los territorios de
nuestras regiones.
                </p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Líneas de Crédito de Redescuento</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                La Banca de Desarrollo Territorial – Findeter - financia operaciones de crédito y de leasing tanto en pesos como en dólares para apoyar a los sectores público y privado con recursos para capital de trabajo, inversión y sustitución de deuda, y para proyectos que apliquen a los sectores que respaldamos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/linea-reactiva-colombia-2022-findeter.jpg"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Reactiva Colombia</h3>
                <p className="text-muted-foreground text-center">
                Financiamos la
Infraestructura para el
desarrollo de los 12
sectores de la economía.
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/lineas-de-credito-de-redescuento/programa-reactiva-colombia-findeter"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div>
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/reactiva-verde-y-sostenible-findeter-2023-4.jpg"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Reactiva Verde y Sostenible.</h3>
                <p className="text-muted-foreground text-center">
                Financiamos proyectos de
infraestructura que
impactan positivamente
el medio ambiente.

                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div><div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/eficiencia-energetica-cuadrado.jpg"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Compromiso eficiencia energética y conectividad virtual.</h3>
                <p className="text-muted-foreground text-center">
                Línea mixta para inversiones en proyectos de transición energética y conectividad.
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div>
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/banner-agua-y-resudios-solidos.jpg"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Reactiva Agua y Residuos Sólidos.</h3>
                <p className="text-muted-foreground text-center">
                Impulsamos la calidad de servicios públicos sostenibles en los territorios.

                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div>
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/compromiso-vivienda-popular.jpg"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Compromiso Vivienda Popular.</h3>
                <p className="text-muted-foreground text-center">
                Recursos de liquidez y capital de trabajo, para la adquisición mejora y construcción de VIS y VIP.
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center  gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Cómo funciona el Redescuento?
              </h2>
              
              <p className="p-10 mx-auto  text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              El redescuento de Findeter es un mecanismo de financiamiento que consiste en que la Financiera de Desarrollo
Territorial S.A. (FINDETER) entrega recursos a intermediarios financieros para que estos los presten a los
beneficiarios de un proyecto o inversión. 
</p><br />
<div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
  <div className="p-5">El funcionamiento del Redescuento de Findeter es
el siguiente:
<ol className="list-disc p-5"><li>El cliente solicita al intermediario financiero los
recursos y a su vez el intermediario financiero
evalúa las garantías.</li>
<li>Findeter presta los recursos a los intermediarios financieros a una tasa de Redescuento.</li>
<li>Los intermediarios financieros prestan los recursos
a los beneficiarios a una tasa de interés que se
negocia en función del nivel de riesgo del cliente.
</li> <li>Los beneficiarios pueden utilizar los recursos para
cubrir los gastos de operación y desarrollo de sus
actividades, así como los gastos de producción y
comercialización de sus bienes y servicios.</li></ol>



</div>
<div><img
                src="https://storage.googleapis.com/productos-f.appspot.com/redescuentoimagen.png"
                width="600"
                height="338"
                alt="Sectores Credito Directo"
                className="center mx-auto overflow-hidden rounded-xl object-bottom"
              /></div></div>
              <div className="bg-muted p-5">
                <h3 className="text-3xl ml-5 pt-5"><strong>Beneficios del redescuento.</strong></h3>
              <ol  className="p-5 list-decimal mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"><li>Financiación hasta de 100% del costo
del proyecto con un plazo de hasta 15
años, incluidos hasta 3 años de gracia.
                
              </li>
              <li>Flexibilidad en la forma de pago:
mensual, bimestral, semestral,
trimestral o anual; vencida o
anticipada.</li>
              <li>Créditos en pesos o dólares.</li>
              <li>Amortización a capital en cuota fija,
gradual creciente o decreciente.
</li>
              <li>Opción de solicitar desembolsos
parciales de acuerdo a las
necesidades de su proyecto.</li>
              <li>Consulta del histórico de pagos a
través de nuestro servicio en línea
Findeter virtual.</li>
</ol></div>
<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Programas de redescuento</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Los programas de inversión de redescuento de Findeter son créditos que se otorgan a través de intermediarios
financieros a empresarios públicos y privados. Estos créditos se destinan a proyectos que buscan mejorar la calidad de
vida de los colombianos, y que generen mejores condiciones económicas y sociales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/programa-energia-y-eficiencia-energetica.JPG"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Energía y eficiencia energética </h3>
                <p className="text-muted-foreground text-center">
                USD$82.495.000.
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/lineas-de-credito-de-redescuento/programa-reactiva-colombia-findeter"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div>
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/programa-fortalecimiento-fiscal.JPG"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Programa para el Fortalecimiento Fiscal y del Gasto de Inversión Pública.</h3>
                <p className="text-muted-foreground text-center">
                USD$150.000.000.

                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div><div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/programa-proteccion-ambiental.JPG"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Programa Protección Ambiental Municipal II.</h3>
                <p className="text-muted-foreground text-center">
                $84.931.000
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>




                
              </div>



          </div>

          
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center  gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              
<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Intermediarios Financieros.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Los programas de inversión de redescuento de Findeter son créditos que se otorgan a través de intermediarios
financieros a empresarios públicos y privados. Estos créditos se destinan a proyectos que buscan mejorar la calidad de
vida de los colombianos, y que generen mejores condiciones económicas y sociales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/entidades-financieras.JPG"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Entidades Financieras </h3>
                <p className="text-muted-foreground text-center">
                Las entidades financieras son
aliados estratégicos para
promover el desarrollo del país y
sus territorios.
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/lineas-de-credito-de-redescuento/programa-reactiva-colombia-findeter"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div>
              <div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/cooperativas-de-ahorro-y-credito.JPG"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Cooperativas de ahorro y crédito</h3>
                <p className="text-muted-foreground text-center">
                A través de créditos de
redescuento con Cooperativas
de ahorro y crédito nos
acercamos a los actores de
economía popular.

                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>
              </div><div className="grid gap-1">
              <img
                src="https://storage.googleapis.com/productos-f.appspot.com/cajas-de-compensacion-familiar.JPG"
                width="300"
                height="306"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
                <h3 className="text-lg font-bold text-center">Cajas de compensación familiar.</h3>
                <p className="text-muted-foreground text-center">
                A través de la vinculación con Cajas
de compensación familiar se pueden
efectuar operaciones de Redescuento
VIS y así contribuir a garantizar el
derecho a una vivienda digna a los
Colombianos.
                </p>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-center"
                    prefetch={false}
                  >
                    Conoce Más
                  </Link>
                  
                </div>




                
              </div>



          </div>

          <div>
            <h2  className="text-3xl font-bold text-center">¿Cómo acceder a un crédito de Findeter ?</h2>
            <br />
            <img
                src="https://storage.googleapis.com/productos-f.appspot.com/como-acceder.JPG"
                width="800"
                height="800"
                alt="Credito Directo"
                className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full"
              />
          </div>
        </section>
        <section>
        <div className="bg-muted p-5">
                <h3 className="text-3xl ml-5 pt-5"><strong>Sectores de la economía.</strong></h3><p  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">En Findeter acompañamos proyectos con el fín social en 12 sectores de la economía a través de financiación y asistencia técnica.</p>
              <ol  className="p-5 list-decimal mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"><li>Transporte
                
              </li>
              <li>Salud</li>
              <li>Desarrollo urbano y vivienda</li>
              <li>Educación </li>
              <li>Minero energético</li>
              <li>Industria creativa y cultural</li>
              <li>Medio Ambiente</li>
              <li>Telecomunicaciones </li>
              <li>Agua potable y saneamiento básico</li>
              <li>Saneamiento Fiscal</li>
              <li>Turismo</li>
              <li>Deporte y recreación</li>










 
</ol></div>
<div>
<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <strong className="text-3xl">Tasas de cartelera y especiales de redescuento</strong><br /><br />
 

              Las tasas de Findeter al intermediario financiero (tasas de redescuento) aplican para inversión, sustitución de deuda y capital de trabajo. Conozca más información:
              
              <br />
              <br />
              <Button className="btn"><a href="https://www.findeter.gov.co/productos-y-servicios-/lineas-de-credito-de-redescuento/tasas-de-cartelera" target="_blank">
        Tasas de Cartelera</a>
            </Button> <span>     </span>
            <Button className="btn"><a href="https://www.findeter.gov.co/productos-y-servicios-/lineas-de-credito-de-redescuento/tasas-especiales-de-redescuento" target="_blank">
        Tasas Especiales de Redescuento</a>
            </Button> 
               
  
 
              </p>

              <div className="bg-muted p-5 mx-auto max-w-[700px]">
                <h3 className="text-3xl ml-5"><strong>Circulares Externas</strong></h3><p  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Conozca las circulares externas de redescuento, crédito directo y tasas de cartelera de Findeter.</p>
<br /><br />
                <Button className="btn"><a href="https://www.findeter.gov.co/productos-y-servicios-/lineas-de-credito-de-redescuento/circulares-externas-findeter" target="_blank">
        Circulares de Redescuento</a>
            </Button> 
<br />
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <strong className="text-3xl">Reglamento de Redescuento</strong><br /><br />
 

              Consulte la versión más actualizada aquí::
              
              <br />
              <br />
              <Button className="btn"><a href="https://www.findeter.gov.co/system/files/internas/GOA-DA-001ReglamentoparaoperacionesderedescuentoV17.pdf" target="_blank">
        Reglamento para Operaciones de Redescuento</a>
            </Button>  
               
  
 
              </p>

</div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. PAGINA DE PRUEBA.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

