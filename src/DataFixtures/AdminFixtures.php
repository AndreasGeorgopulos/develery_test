<?php

namespace App\DataFixtures;

use App\Entity\Admin;
use App\Entity\ContactMessage;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AdminFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $admin = (new Admin())
            ->setFirstName('Darth')
            ->setLastname('Vader')
            ->setEmail('darth@vader.com')
            ->setPassword('aA123456');

        $manager->persist($admin);
        $manager->flush();
    }
}
