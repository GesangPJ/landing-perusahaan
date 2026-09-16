
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select"

export default function HalamanKontak(){

    return(
    <form action="#">
        <div className="container mt-12 mb-15 sm:mt-12 px-4 sm:px-5 lg:px-44 max-w-full">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field className="my-3">
                <FieldLabel>Nama</FieldLabel>
                <Input id="name" type="text" placeholder="ketik nama anda" required/>
            </Field>
            <Field className="my-3">
                <FieldLabel>Email</FieldLabel>
                <Input id="email" type="email" placeholder="ketik alamat email anda" required/>
            </Field>
            </div>
            <div className="grid grid-cols-1 gap-3 my-5">
            <select className="w-full h-10 border rounded-md bg-background">
                <option>Pilih layanan</option>
                <option>Layanan 1</option>
                <option>Layanan 2</option>
                <option>Layanan 3</option>
                <option>Layanan 4</option>
                <option>Layanan 5</option>
            </select>
            </div>
            <div className="grid grid-cols-1 gap-3 max-w-120 my-5">
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih layanan" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="layanan_1">layanan_1</SelectItem>
                    <SelectItem value="layanan_2">layanan_2</SelectItem>
                    <SelectItem value="layanan_3">layanan_3</SelectItem>
                    <SelectItem value="layanan_4">layanan_4</SelectItem>
                    <SelectItem value="layanan_5">layanan_5</SelectItem>
                </SelectContent>

            </Select>
            </div>
        </div>
    </form>
    )
}
