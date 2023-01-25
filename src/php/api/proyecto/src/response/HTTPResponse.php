<?php
namespace APP\response;

class HTTPResponse {

    public static function json(int $code, $data){
		$response = array();
		switch (gettype($data)) {
			case 'array':
				foreach ($data as $dto) {
					$response[] = $dto->jsonSerialize();
				}
				break;
			case 'object':
				$response = $data->jsonSerialize();
				break;
			case 'string':
				$response = [
					'message' => $data
				];
				break;
						
			default:
				# code...
				break;
		}
		header('Content-Type: application/json; charset=utf-8');
		http_response_code($code);
		echo json_encode($response);
    }


}