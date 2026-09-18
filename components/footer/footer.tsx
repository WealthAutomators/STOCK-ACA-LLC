import Link from "next/link";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl tracking-[0.18em]">{company.displayName}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">{company.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">Collections</h3>
            <ul className="space-y-2.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">Customer</h3>
            <ul className="space-y-2.5">
              {footerLinks.customer.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">Company</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <p className="font-medium text-primary-foreground">{company.name}</p>
              </li>
              <li>
                {company.address.street}<br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary-foreground">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-primary-foreground/15" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-primary-foreground/70">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image key={method.name} src={method.icon} alt={method.name} width={40} height={28} />
          ))}
        </div>
      </Container>
    </footer>
  );
}
