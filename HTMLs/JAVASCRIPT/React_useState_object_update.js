import { useState } from 'react';

export default function ProfileEditor() {
    const [profile, setProfile] = useState({
        name: 'Kazi',
        bio: 'Frontend wizard 🧙‍♂️',
    });

    function updateName(e) {
        setProfile({
            ...profile, // ✅ spread existing keys
            name: e.target.value, // 🎯 overwrite one key
        });
    }

    return (
        <>
            <input value={profile.name} onChange={updateName} />
            <p>{profile.bio}</p>
        </>
    );
}
