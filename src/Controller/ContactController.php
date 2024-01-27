<?php

namespace App\Controller;

use App\Entity\ContactMessage;
use App\Form\ContactFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request): Response
    {
        return $this->render('contact/index.html.twig', [
            'siteTitle' => 'Kapcsolatfelvétel'
        ]);
    }

    #[Route('/api/contact-submit', name: 'contact_submit', methods: ['POST'])]
    public function submitContact(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $content = $request->getContent();
        $data = json_decode($content, true);
        $name = $data['name'];
        $email = $data['email'];
        $message = $data['message'];

        $model = (new ContactMessage())
            ->setName($name)
            ->setEmail($email)
            ->setMessage($message);

        $entityManager->persist($model);
        $entityManager->flush();

        $response = [
            'status' => 'success',
        ];

        return $this->json($response);
    }
}
