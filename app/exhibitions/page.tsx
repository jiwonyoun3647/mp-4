import getExhibition from "@/lib/getExhibition";
import ExhibitionDisplay from "@/app/exhibitions/ExhibitionDisplay";
export const dynamic = "force-dynamic";

export default async function ExhibitionPage({ searchParams }: { searchParams: Promise<{ keyword: string }> })
{
    const keyword_param = await searchParams;
    const keyword = keyword_param.keyword;
    const exhibit_data = await getExhibition(keyword);

    return (
        <ExhibitionDisplay exhibitions={exhibit_data} />
    );
}
