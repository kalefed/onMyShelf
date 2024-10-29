import Image from "next/image";
// Defines the expected shape of the Books component's props
interface BookProps {
    id: number;
    title: string;
    author: string;
    cover: string;
    genre: string;
    status: string;
}

export default function Books({ id, title, author, cover, genre, status }: BookProps) {
    return (
        <div className="flex flex-row gap-4">
            <Image src={cover} alt={`${title} cover`} width={200} height={400} />
            <div>
                <h2>{title}</h2>
                <p>id: {id}</p>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
                <p>Status: {status}</p>
            </div>

        </div>
    );
}