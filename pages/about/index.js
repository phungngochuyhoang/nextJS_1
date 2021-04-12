import { useRouter } from 'next/router';
import Link from 'next/link';

function About () {
    
    const router = useRouter();
    const { id, name } = router.query;

    return (<div>
        <h1> About {id} {name}</h1>
        <nav>
            <Link href="/about?id=1"> about 1 </Link>
        </nav>
    </div>)
}

export default About;