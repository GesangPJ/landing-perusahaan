
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

export default function LayananBeranda(){

    return(
        <div>
            {/* Title layanan */}
            <div className="text-center grid grid-cols-1 gap-3 mb-5">
                <h1 className="text-3xl font-semibold">Layanan Kami</h1>
                <p className="text-muted-foreground text-sm">Temukan layanan yang cocok dari kami untuk anda.</p>
            </div>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto px-4">
                {/* Layanan 1 */}
                <Card className="w-full">
                    <CardHeader>
                    <CardTitle className="text-xl text-center font-semibold">
                        Layanan 1
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-sm leading-relaxed">Deskripsi layanan 1 nothoeogneogienipeh giprehiphnre gnviergiergnperngirhgirhgpirwnginprig</p>
                    </CardContent>
                </Card>

                {/* Layanan 2 */}
                <Card className="w-full">
                    <CardHeader>
                    <CardTitle className="text-xl text-center font-semibold">
                        Layanan 2
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>Deskripsi Layanan 2 erpieytihewnpwnpitwtywehihiv whtuwhigpnip itiwegfhwei h htuwhu uwhtu huh</p>
                    </CardContent>
                </Card>

                {/* Layanan 3 */}
                <Card className="w-full">
                    <CardHeader>
                    <CardTitle className="text-xl text-center font-semibold">
                        Layanan 3
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    {/* Content */}
                    </CardContent>
                </Card>

                {/* Layanan 4 */}
                <Card className="w-full">
                    <CardHeader>
                    <CardTitle className="text-xl text-center font-semibold">
                        Layanan 4
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    {/* Content */}
                    </CardContent>
                </Card>
                </div>
        </div>
    )
}
