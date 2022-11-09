<?php

namespace App\Controller;

use App\Entity\Clientes;
use App\Repository\ClientesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/clientes")
*/ 

class ClientesController extends AbstractController
{

    /**  
     * @Route("/list" , name="app_clientes_list" , methods={"GET"})
     */
    public function listClientes(ClientesRepository $clientesRepository):Response
    {
        $clientes = $clientesRepository->findAll();
        $array_clientes = array();

        foreach($clientes as $cliente) {
            $array_clientes[] = array(
            'id' => $cliente->getId(),
            'nombre' => $cliente->getNombre(),
            'apellido_1' => $cliente->getApellido1(),
            'apellido_2' => $cliente->getApellido2(),
            'edad' => $cliente->getEdad(),
            'email' => $cliente->getEmail(),
            'phone_number' => $cliente->getPhoneNumber(),
            );
        }
        
        return new JsonResponse($array_clientes);
        
    }
    
    /**
     * @Route("/new", name="app_clientes_new", methods={"POST"})
     */
    public function new(Request $request, ClientesRepository $clientesRepository , EntityManagerInterface $em): Response 
    {
        $request = $this->transformJsonBody($request);
      

        $cliente = new Clientes;
        $cliente->setNombre($request->get('nombre')); 
        $cliente->setApellido1($request->get('apellido_1')); 
        $cliente->setApellido2($request->get('apellido_2')); 
        $cliente->setEdad($request->get('edad')); 
        $cliente->setEmail($request->get('email')); 
        $cliente->setPhoneNumber($request->get('phone_number')); 
        $em->persist($cliente);
        $em->flush();

        return new Response(
            'cliente creado con exito', 
            Response::HTTP_OK
        );

        
    }

    /**
     * @Route("/{id}", name="app_clientes_show", methods={"GET"})
    */
    public function show($id , ClientesRepository $clientesRepository)/* : JsonResponse */
    {
        $cliente = $clientesRepository->findOneBy(['id' => $id]);

        $data = [
            'id' => $cliente->getId(),
            'nombre' => $cliente->getNombre(),
            'apellido_1' => $cliente->getApellido1(),
            'apellido_2' => $cliente->getApellido2(),
            'edad' => $cliente->getEdad(),
            'email' => $cliente->getEmail(),
            'phone_number' => $cliente->getPhoneNumber()
        ];

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**  
     * @Route("/{id}" , name="app_clientes_update", methods={"PUT"})
    */

    public function updateCliente($id ,Request $request, ClientesRepository $clientesRepository , EntityManagerInterface $em):Response 
    {
       dump($id);

       $cliente = $clientesRepository->findOneBy(['id' => $id]);


       $data = json_decode($request->getContent(),true);

    //    dump($data);

       empty($data['nombre']) ? true : $cliente->setNombre($data['nombre']);
       empty($data['apellido_1']) ? true : $cliente->setApellido1($data['apellido_1']);
       empty($data['apellido_2']) ? true : $cliente->setApellido2($data['apellido_2']);
       empty($data['edad']) ? true : $cliente->setEdad($data['edad']);
       empty($data['email']) ? true : $cliente->setEmail($data['email']);
       empty($data['phone_number']) ? true : $cliente->setPhoneNumber($data['phone_number']);

      $em->persist($cliente);
      $em->flush();
   
        return new Response(
            'cliente actualizado', 
            Response::HTTP_OK
        );
    }

    /** 
     * @Route("/{id}", name="app_clientes_delete", methods={"DELETE"})
    */
    public function deleteCliente($id , ClientesRepository $clientesRepository , EntityManagerInterface $em):Response
    {
        $cliente = $clientesRepository->findOneBy(['id' => $id]);

        $em->remove($cliente);
        $em->flush();

        return new JsonResponse(['status'=> 'cliente eliminado'], Response::HTTP_NO_CONTENT);
    }

     /**
     * @Route("/saludo", name="app_clientes_saludo", methods={"GET"})
     */
    public function saludo(Request $request, ClientesRepository $clientesRepository , EntityManagerInterface $em): Response 
    {
        return new Response(
            'te encuentras en el controlador de clientes', 
            Response::HTTP_OK
        );
    }

    
    protected function transformJsonBody(\Symfony\Component\HttpFoundation\Request $request)
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return null;
        }

        if ($data === null) {
            return $request;
        }

        $request->request->replace($data);

        return $request;
    }
}
