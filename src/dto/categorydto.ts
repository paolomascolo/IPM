export class CategoryDTO
{
    id: number;
    name: string;

    getSearchString() : string
    {
        return this.id.toString() + this.name;
    }
}